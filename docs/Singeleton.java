// 饿汉式
public class Singeleton{
    private static Singeleton example = new Singeleton();
    private Singeleton() {

    }
    public static Singeleton getSingleton() {
        return example;
    }
}

// 懒汉式
class Singeleton1 {
    private static Singeleton1 example;
    private Singeleton1() {

    }
    public static Singeleton1 getSingleton() {
        if (example == null) {
            synchronized(Singeleton1.class) {
                if (example == null) {
                    example = new Singeleton1();
                }
            }
        }
        return example;
    }
}