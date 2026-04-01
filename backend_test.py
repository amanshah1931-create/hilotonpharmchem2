import requests
import sys
from datetime import datetime
import json

class HiltonPharmaChemAPITester:
    def __init__(self, base_url="https://hilton-pharma-chem.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    if isinstance(response_data, list):
                        print(f"   Response: List with {len(response_data)} items")
                    elif isinstance(response_data, dict):
                        print(f"   Response: Dict with keys: {list(response_data.keys())}")
                except:
                    print(f"   Response: {response.text[:100]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            return success, response.json() if success and response.content else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        success, response = self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )
        return success

    def test_get_blogs(self):
        """Test getting all blog posts"""
        success, response = self.run_test(
            "Get All Blog Posts",
            "GET",
            "blogs",
            200
        )
        if success and isinstance(response, list):
            print(f"   Found {len(response)} blog posts")
            if len(response) > 0:
                first_post = response[0]
                required_fields = ['id', 'title', 'slug', 'excerpt', 'content', 'author', 'created_at']
                missing_fields = [field for field in required_fields if field not in first_post]
                if missing_fields:
                    print(f"   ⚠️  Missing fields in blog post: {missing_fields}")
                else:
                    print(f"   ✅ Blog post structure is correct")
        return success, response

    def test_get_blog_by_slug(self, slug):
        """Test getting a specific blog post by slug"""
        success, response = self.run_test(
            f"Get Blog Post by Slug: {slug}",
            "GET",
            f"blogs/{slug}",
            200
        )
        return success, response

    def test_get_nonexistent_blog(self):
        """Test getting a non-existent blog post"""
        success, response = self.run_test(
            "Get Non-existent Blog Post",
            "GET",
            "blogs/non-existent-slug",
            404
        )
        return success

    def test_create_inquiry(self):
        """Test creating a new inquiry"""
        test_inquiry = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "company": "Test Company Ltd",
            "email": f"test{datetime.now().strftime('%H%M%S')}@example.com",
            "phone": "+91 9876543210",
            "product_interest": "oils-ointments",
            "message": "This is a test inquiry for API testing purposes."
        }
        
        success, response = self.run_test(
            "Create New Inquiry",
            "POST",
            "inquiries",
            200,
            data=test_inquiry
        )
        
        if success and isinstance(response, dict):
            required_fields = ['id', 'name', 'email', 'created_at']
            missing_fields = [field for field in required_fields if field not in response]
            if missing_fields:
                print(f"   ⚠️  Missing fields in inquiry response: {missing_fields}")
            else:
                print(f"   ✅ Inquiry response structure is correct")
                print(f"   Created inquiry ID: {response.get('id', 'N/A')}")
        
        return success, response

    def test_get_inquiries(self):
        """Test getting all inquiries"""
        success, response = self.run_test(
            "Get All Inquiries",
            "GET",
            "inquiries",
            200
        )
        if success and isinstance(response, list):
            print(f"   Found {len(response)} inquiries")
        return success, response

    def test_create_inquiry_missing_fields(self):
        """Test creating inquiry with missing required fields"""
        incomplete_inquiry = {
            "company": "Test Company"
            # Missing name and email
        }
        
        success, response = self.run_test(
            "Create Inquiry with Missing Fields",
            "POST",
            "inquiries",
            422,  # Expecting validation error
            data=incomplete_inquiry
        )
        return success

    def test_create_blog_post(self):
        """Test creating a new blog post"""
        test_blog = {
            "title": f"Test Blog Post {datetime.now().strftime('%H%M%S')}",
            "slug": f"test-blog-post-{datetime.now().strftime('%H%M%S')}",
            "excerpt": "This is a test blog post excerpt for API testing purposes.",
            "content": "<h2>Test Content</h2><p>This is test content for the blog post.</p>",
            "category": "Industry Insights",
            "image_url": "https://images.pexels.com/photos/7615621/pexels-photo-7615621.jpeg",
            "author": "Test Author"
        }
        
        success, response = self.run_test(
            "Create New Blog Post",
            "POST",
            "blogs",
            200,
            data=test_blog
        )
        
        if success and isinstance(response, dict):
            required_fields = ['id', 'title', 'slug', 'excerpt', 'content', 'author', 'created_at']
            missing_fields = [field for field in required_fields if field not in response]
            if missing_fields:
                print(f"   ⚠️  Missing fields in blog response: {missing_fields}")
            else:
                print(f"   ✅ Blog post response structure is correct")
                print(f"   Created blog ID: {response.get('id', 'N/A')}")
                print(f"   Created blog slug: {response.get('slug', 'N/A')}")
        
        return success, response

def main():
    print("🚀 Starting Hilton Pharma Chem API Tests")
    print("=" * 50)
    
    tester = HiltonPharmaChemAPITester()
    
    # Test root endpoint
    tester.test_root_endpoint()
    
    # Test blog endpoints
    blogs_success, blogs_data = tester.test_get_blogs()
    
    # Test specific blog post if blogs exist
    if blogs_success and blogs_data and len(blogs_data) > 0:
        first_blog_slug = blogs_data[0].get('slug')
        if first_blog_slug:
            tester.test_get_blog_by_slug(first_blog_slug)
    
    # Test non-existent blog
    tester.test_get_nonexistent_blog()
    
    # Test inquiry endpoints
    inquiry_success, inquiry_data = tester.test_create_inquiry()
    tester.test_get_inquiries()
    
    # Test validation
    tester.test_create_inquiry_missing_fields()
    
    # Test blog creation
    blog_create_success, blog_create_data = tester.test_create_blog_post()
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print(f"❌ {tester.tests_run - tester.tests_passed} tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())