
<template>
  <Icon :iconName="'clothes'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ClothesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clothes'
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
