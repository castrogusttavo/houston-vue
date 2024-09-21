
<template>
  <Icon :iconName="'invoice-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Invoice03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'invoice-03'
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
