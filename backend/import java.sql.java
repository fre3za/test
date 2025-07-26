import java.sql.*;
import java.io.*;

public class loadOrders{
    public static void main(String[]args) throws Exception{
        Connection con = DriveManger.getConnection("Jdbc:mysql ://localhost: 3306 / ecommerce" , "root","password");
        BufferedReader br = new BufferedReader(new FileREader("order.csv"));
        String line = br.readLine();
        PreparedStatement ps = con.PreparedStatement("INSERT INTO ORDERS VALUE (?,?,?,?)");
        while((line = br.readLine()) != null){
            String[]data = line.split(",");
            ps.setInt(1,Integer.parseInt(data[0]));
            ps.setString(2,data[1]);
            ps.setInt(3,Integer.parseInt(data[2]));
            ps.setString(4,data[3]);
            ps.executeUpdate();
        }
        System.out.println("Data loaded sucessfully!");
        br.close();
        con.close();
    }
}