package com.product.productcatalog.config;

import com.product.productcatalog.model.Category;
import com.product.productcatalog.model.Product;
import com.product.productcatalog.repository.CategoryRepository;
import com.product.productcatalog.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {


    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public DataSeeder(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        productRepository.deleteAll();
        categoryRepository.deleteAll();

        Category electronics = new Category();
        electronics.setName("Electronics");

        Category clothing = new Category();
        clothing.setName("Clothing");

        Category home = new Category();
        home.setName("Home and Kitchen");

        categoryRepository.saveAll(Arrays.asList(electronics, clothing, home));

        Product phone = new Product();
        phone.setName("SmartPhone");
        phone.setDescription("This is a smart phone product.");
        phone.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrMkjSMbaWofvIJqyMibRKTXXRz6coJ9ewA&s");
        phone.setPrice(799.99);
        phone.setCategory(electronics);

        Product laptop = new Product();
        laptop.setName("Laptop");
        laptop.setDescription("High Performance Laptop for work and play.");
        laptop.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOcfuS_6CtEzG07Cki8s9i20iwugOXMg7tgg&s");
        laptop.setPrice(2099.99);
        laptop.setCategory(electronics);

        Product jacket = new Product();
        jacket.setName("Winter Jacket");
        jacket.setDescription("Warm and cozy jacket for winter.");
        jacket.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6QSMKgmtC48H6eHUaStpbPgTEvu-38-eLQ&s");
        jacket.setPrice(150.99);
        jacket.setCategory(clothing);

        Product blender = new Product();
        blender.setName("Blender");
        blender.setDescription("High speed bender for smoothies and more.");
        blender.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjPs7u0HwcE16M7Cmtg-TolFLnXuPtfxfqw&s");
        blender.setPrice(79.99);
        blender.setCategory(home);

       productRepository.saveAll(Arrays.asList(phone, laptop, jacket, blender));
    }
}
