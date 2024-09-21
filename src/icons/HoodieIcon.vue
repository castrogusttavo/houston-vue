
<template>
  <Icon :iconName="'hoodie'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HoodieIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hoodie'
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
