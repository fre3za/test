import java.io.*;

public class StockChecker {
    public static void main(String[] args) throws IOException {
        String file = "inventory.csv";
        String productSearch = "Classic T-Shirt";

        BufferedReader br = new BufferedReader(new FileReader(file));
        String line = br.readLine(); // skip header

        boolean found = false;
        while ((line = br.readLine()) != null) {
            String[] data = line.split(",");
            if (data[0].equalsIgnoreCase(productSearch)) {
                System.out.println(productSearch + " in stock: " + data[1]);
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println(productSearch + " not found in inventory.");
        }
    }
}
