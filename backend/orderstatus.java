import java.io.*;

public class OrderStatus {
    public static void main(String[] args) throws IOException {
        String file = "order_status.csv";
        String searchId = "12345";
        BufferedReader br = new BufferedReader(new FileReader(file));
        String line = br.readLine(); // skip header

        boolean found = false;
        while ((line = br.readLine()) != null) {
            String[] data = line.split(",");
            if (data[0].equals(searchId)) {
                System.out.println("Order " + searchId + " Status: " + data[1]);
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println("Order ID " + searchId + " not found.");
        }
    }
}
