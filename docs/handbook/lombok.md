## lombok注解：

```
https://mp.weixin.qq.com/s?src=11&timestamp=1621818555&ver=3087&signature=egETiTZMO2NUEZuZzcqF311UlHinHlfQDKVhDgYcbgx1EP2nJeSBoUqG9fz-lK3S78zFOJWz*2iMPgivJkjeECFMFZbhQptwCcUBlTDnSZyKdLV2wvcjcnYmU98nT9OA&new=1
```

@Getter	@Setter	@ToString	@EqualsAndHashCode

@AllArgsConstructor    不包括final字段

@NoArgsConstructor	单例模式需要将构造器私有化，此时需要设置access @NoArgsConstructor(access=AccessLevel.PRIVATE)

@RequiredArgsConstructor  可以生成带参和不带参的构造方法，若带参数，只能是@NonNull和final修饰的未经初始化的字段

@Data  包括getter/setter/NoArgsConstructor/equals/hashCode/toString/canEqual这些注解

@Value 类似@Data但是他会把所有成员变量默认定义为private final，并且不会生成set方法

@Builder 构建者模式，只能用在类上，链式构造工厂

```java
//HandBook是个内部类 
GetStuHandBookListVO.HandBook handBook = GetStuHandBookListVO.HandBook.builder()                  .dzscName(dzscName).subject(subject).subjectId(subjectId).build();
```

## 

