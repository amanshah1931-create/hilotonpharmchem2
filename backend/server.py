from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# --- Models ---

class InquiryCreate(BaseModel):
    name: str
    company: str = ""
    email: str
    phone: str = ""
    product_interest: str = ""
    message: str = ""

class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company: str = ""
    email: str
    phone: str = ""
    product_interest: str = ""
    message: str = ""
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    slug: str
    excerpt: str
    content: str
    category: str = ""
    image_url: str = ""
    author: str = "Hilton Pharma Chem"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class BlogPostCreate(BaseModel):
    title: str
    slug: str
    excerpt: str
    content: str
    category: str = ""
    image_url: str = ""
    author: str = "Hilton Pharma Chem"

# --- Inquiry Endpoints ---

@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(data: InquiryCreate):
    inquiry = Inquiry(**data.model_dump())
    doc = inquiry.model_dump()
    await db.inquiries.insert_one(doc)
    doc.pop("_id", None)
    return inquiry

@api_router.get("/inquiries", response_model=List[Inquiry])
async def get_inquiries():
    results = await db.inquiries.find({}, {"_id": 0}).to_list(1000)
    return results

# --- Blog Endpoints ---

@api_router.get("/blogs", response_model=List[BlogPost])
async def get_blogs():
    results = await db.blogs.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
    return results

@api_router.get("/blogs/{slug}", response_model=BlogPost)
async def get_blog_by_slug(slug: str):
    post = await db.blogs.find_one({"slug": slug}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post

@api_router.post("/blogs", response_model=BlogPost)
async def create_blog(data: BlogPostCreate):
    post = BlogPost(**data.model_dump())
    doc = post.model_dump()
    await db.blogs.insert_one(doc)
    doc.pop("_id", None)
    return post

@api_router.put("/blogs/{blog_id}")
async def update_blog(blog_id: str, data: BlogPostCreate):
    update_data = data.model_dump()
    result = await db.blogs.update_one({"id": blog_id}, {"$set": update_data})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Blog post not found")
    updated = await db.blogs.find_one({"id": blog_id}, {"_id": 0})
    return updated

@api_router.delete("/blogs/{blog_id}")
async def delete_blog(blog_id: str):
    result = await db.blogs.delete_one({"id": blog_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return {"message": "Blog post deleted"}

@api_router.delete("/inquiries/{inquiry_id}")
async def delete_inquiry(inquiry_id: str):
    result = await db.inquiries.delete_one({"id": inquiry_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    return {"message": "Inquiry deleted"}

# --- Seed Blog Data ---

@app.on_event("startup")
async def seed_blogs():
    count = await db.blogs.count_documents({})
    if count == 0:
        seed_data = [
            {
                "id": str(uuid.uuid4()),
                "title": "Why Third-Party Manufacturing Is the Future of Ayurvedic Products",
                "slug": "third-party-manufacturing-future-ayurveda",
                "excerpt": "Third-party manufacturing allows brands to focus on marketing and distribution while leveraging established production expertise. Here is why this model is transforming the Ayurvedic industry.",
                "content": """<h2>The Rise of Contract Manufacturing in Ayurveda</h2>
<p>The Indian Ayurvedic products market is projected to grow at a compound annual growth rate (CAGR) of over 15% in the coming years. With increasing demand, brands need reliable manufacturing partners who can deliver consistent quality at scale.</p>
<h3>Benefits of Third-Party Manufacturing</h3>
<p><strong>Cost Efficiency:</strong> Setting up a GMP-compliant manufacturing facility requires significant capital investment. Third-party manufacturing eliminates this barrier, allowing brands to allocate resources toward market development and customer acquisition.</p>
<p><strong>Regulatory Compliance:</strong> Established manufacturers like Hilton Pharma Chem maintain GMP and ISO certifications, ensuring every batch meets regulatory standards without the brand needing to manage compliance independently.</p>
<p><strong>Scalability:</strong> Whether you need 1,000 units or 100,000 units, a third-party manufacturer can adjust production volumes to match demand fluctuations.</p>
<h3>What to Look for in a Manufacturing Partner</h3>
<p>When selecting a third-party manufacturer, evaluate their track record in formulation development, quality control processes, batch consistency, and their ability to customize formulations to your specifications.</p>
<p>At Hilton Pharma Chem, we bring 25+ years of formulation expertise and have developed over 300 formulations across pain management, wellness, and allied therapeutic segments.</p>""",
                "category": "Industry Insights",
                "image_url": "https://images.pexels.com/photos/7615621/pexels-photo-7615621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "author": "Hilton Pharma Chem",
                "created_at": "2025-11-15T10:00:00+00:00"
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Understanding Batch Consistency in Pharmaceutical Manufacturing",
                "slug": "batch-consistency-pharmaceutical-manufacturing",
                "excerpt": "Batch-to-batch variation is one of the most significant quality challenges in pharmaceutical manufacturing. Learn how standardized processes ensure uniformity across every production run.",
                "content": """<h2>Why Batch Consistency Matters</h2>
<p>In pharmaceutical and Ayurvedic product manufacturing, batch consistency refers to the uniformity of product quality, potency, and physical characteristics across different production runs. Inconsistent batches can lead to regulatory issues, customer complaints, and brand damage.</p>
<h3>Key Factors Affecting Consistency</h3>
<p><strong>Raw Material Standardization:</strong> The quality of input materials directly impacts the final product. Implementing strict vendor qualification processes and incoming material testing protocols is essential.</p>
<p><strong>Process Control:</strong> Documented Standard Operating Procedures (SOPs) for every stage of manufacturing, from mixing to packaging, ensure reproducibility across batches.</p>
<p><strong>Environmental Monitoring:</strong> Temperature, humidity, and cleanliness of the manufacturing environment must be controlled and documented throughout the production process.</p>
<h3>Our Approach at Hilton Pharma Chem</h3>
<p>We implement rigorous in-process quality checks at every stage of production. Our QC laboratory conducts comprehensive testing including physical, chemical, and microbiological parameters to ensure every batch meets predetermined specifications.</p>
<p>Our commitment to process discipline and product stability has enabled us to maintain consistent quality across our entire product range, including pain relief ointments, balms, capsules, and syrups.</p>""",
                "category": "Quality Assurance",
                "image_url": "https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MHx8fHwxNzc1MDUyODU5fDA&ixlib=rb-4.1.0&q=85",
                "author": "Hilton Pharma Chem",
                "created_at": "2025-10-28T10:00:00+00:00"
            },
            {
                "id": str(uuid.uuid4()),
                "title": "GMP Certification: What It Means for Your Ayurvedic Brand",
                "slug": "gmp-certification-ayurvedic-brand",
                "excerpt": "Good Manufacturing Practice (GMP) certification is more than a regulatory requirement. It is a commitment to quality that directly impacts your brand reputation and market access.",
                "content": """<h2>What Is GMP Certification?</h2>
<p>Good Manufacturing Practice (GMP) is a system of guidelines that ensures products are consistently produced and controlled according to quality standards. For Ayurvedic and pharmaceutical products, GMP certification is mandated by regulatory authorities including the Central Drugs Standard Control Organisation (CDSCO) in India.</p>
<h3>Key GMP Requirements</h3>
<p><strong>Facility Design:</strong> Manufacturing facilities must be designed to minimize contamination risks. This includes proper ventilation, controlled access areas, and dedicated zones for different production stages.</p>
<p><strong>Documentation:</strong> Every process, from raw material receipt to finished product dispatch, must be documented. This creates a complete audit trail for each batch produced.</p>
<p><strong>Personnel Training:</strong> All manufacturing personnel must receive regular training on hygiene practices, equipment operation, and quality procedures.</p>
<h3>Impact on Your Brand</h3>
<p>Partnering with a GMP-certified manufacturer provides several competitive advantages. Retailers and distributors prefer products from GMP-certified facilities. Export markets often require GMP certification as a minimum qualification. End consumers increasingly look for quality certifications when making purchasing decisions.</p>
<p>Hilton Pharma Chem operates a GMP and ISO certified facility in Sidhpur, Gujarat, ensuring that every product manufactured meets the highest quality standards.</p>""",
                "category": "Certifications",
                "image_url": "https://images.unsplash.com/photo-1633509907796-ece8a21bdbcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHw0fHxheXVydmVkaWMlMjBoZXJicyUyMHBvd2RlcnxlbnwwfHx8fDE3NzUwNTI4NjF8MA&ixlib=rb-4.1.0&q=85",
                "author": "Hilton Pharma Chem",
                "created_at": "2025-10-10T10:00:00+00:00"
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Pain Management Solutions: From Formulation to Market",
                "slug": "pain-management-solutions-formulation-to-market",
                "excerpt": "Pain relief products represent one of the fastest-growing segments in the wellness market. Learn about the formulation process and how to bring effective pain management products to market.",
                "content": """<h2>The Growing Demand for Pain Relief Products</h2>
<p>The global pain management market continues to expand as consumers seek effective, accessible solutions for common musculoskeletal conditions. Topical pain relief products, including ointments, balms, and oils, are particularly popular due to their ease of use and localized action.</p>
<h3>Formulation Considerations</h3>
<p><strong>Active Ingredients:</strong> Selecting the right combination of active ingredients is critical. Common Ayurvedic ingredients for pain relief include Mahanarayan Oil, Gandhpura Oil (Wintergreen), Eucalyptus Oil, Camphor, and Menthol, each with specific therapeutic properties.</p>
<p><strong>Base Selection:</strong> The base or vehicle determines how the active ingredients are delivered to the target site. For ointments, the base affects absorption rate, skin feel, and product stability.</p>
<p><strong>Stability Testing:</strong> Pain relief formulations must maintain their efficacy throughout their shelf life. Accelerated stability testing helps predict product performance under various storage conditions.</p>
<h3>Hilton Pharma Chem Expertise</h3>
<p>Pain management is our core competency. Our founder has been directly involved in the development of specialized formulations for pain relief ointments, balms, oils, and inhalers. We ensure that every product delivers consistent therapeutic performance with no batch-to-batch variation.</p>
<p>Our formulation team works closely with brand partners to develop customized pain management products that meet specific market requirements and regulatory standards.</p>""",
                "category": "Product Development",
                "image_url": "https://images.pexels.com/photos/4021768/pexels-photo-4021768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "author": "Hilton Pharma Chem",
                "created_at": "2025-09-20T10:00:00+00:00"
            }
        ]
        await db.blogs.insert_many(seed_data)
        logger.info("Seeded %d blog posts", len(seed_data))

# --- Root endpoint ---

@api_router.get("/")
async def root():
    return {"message": "Hilton Pharma Chem API"}

# Include router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
