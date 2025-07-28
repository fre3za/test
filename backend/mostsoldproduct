import java.io.*;
import java.util.*;

public class TopSoldProducts {
    public static void main(String[] args) throws IOException {
        String file = "orders.csv";
        Map<String, Integer> productSales = new HashMap<>();

        BufferedReader br = new BufferedReader(new FileReader(file));
        String line = br.readLine(); // skip header

        while ((line = br.readLine()) != null) {
            String[] data = line.split(",");
            String product = data[1];
            int quantity = Integer.parseInt(data[2]);
            productSales.put(product, productSales.getOrDefault(product, 0) + quantity);
        }

        // Sort and print top 5
        productSales.entrySet().stream()
            .sorted((a, b) -> b.getValue() - a.getValue())
            .limit(5)
            .forEach(entry -> System.out.println(entry.getKey() + " - Sold: " + entry.getValue()));
    }
}
