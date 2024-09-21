
<template>
  <Icon :iconName="'cabinet-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cabinet03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cabinet-03'
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
