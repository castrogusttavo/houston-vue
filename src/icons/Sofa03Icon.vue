
<template>
  <Icon :iconName="'sofa-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sofa03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sofa-03'
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
