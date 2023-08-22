import ApiClient from "./api-client";

describe('ApiClient', () => {

    // Test that the ApiClient class can be instantiated with a valid apiUrl
    it('should instantiate ApiClient with a valid apiUrl', () => {
      const apiUrl = 'https://api.example.com';
      const apiClient = new ApiClient(apiUrl);
      expect(apiClient).toBeInstanceOf(ApiClient);
    });

    // Test that the get method in the ApiClient class returns data from the specified URL.
    it('should return data when called with a valid URL', async () => {
      // Arrange
      const apiUrl = 'https://api.example.com';
      const apiClient = new ApiClient(apiUrl);
      const url = '/data';
      const responseData = { id: 1, name: 'John Doe' };
      const expectedData = responseData;

      // Mock the axiosInstance.get method to return the responseData
      apiClient['axiosInstance'].get = jest.fn().mockResolvedValue({ data: responseData });

      // Act
      const result = await apiClient.get(url);

      // Assert
      expect(apiClient['axiosInstance'].get).toHaveBeenCalledWith(url);
      expect(result).toEqual(expectedData);
    });

    // Test that the post method in the ApiClient class successfully posts data to the specified URL.
    it('should successfully post data to the specified URL', async () => {
      // Arrange
      const apiUrl = 'https://example.com/api';
      const apiClient = new ApiClient(apiUrl);
      const data = { name: 'John Doe' };
      const url = '/data';
      const responseData = { id: 1, name: 'John Doe' };
      const expectedData = responseData;
      apiClient['axiosInstance'].post = jest.fn().mockResolvedValue({ data: responseData });

      // Act
      const response = await apiClient.post(url, data);

      // Assert
      expect(apiClient['axiosInstance'].post).toHaveBeenCalledWith(url, data);
      expect(response).toEqual(expectedData);
    });

});
