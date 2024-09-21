
<template>
  <Icon :iconName="'wardrobe-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Wardrobe01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wardrobe-01'
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
