
<template>
  <Icon :iconName="'cook-book'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CookBookIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cook-book'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
