
<template>
  <Icon :iconName="'carrot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CarrotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'carrot'
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
