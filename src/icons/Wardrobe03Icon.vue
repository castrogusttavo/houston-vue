
<template>
  <Icon :iconName="'wardrobe-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Wardrobe03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wardrobe-03'
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
