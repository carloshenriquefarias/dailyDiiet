export type IsInDietTypeProps = boolean | undefined;

export type MealProps = {
    nameMeal: string;
    description: string;
    hour: string;
    isInDiet: IsInDietTypeProps;
}

export type MealListDTO = {
    date: string;
    data: MealProps[];
};

// export { IsInDietTypeProps, MealTypeProps, MealListTypeProps };