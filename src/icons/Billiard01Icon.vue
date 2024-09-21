
<template>
  <Icon :iconName="'billiard-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Billiard01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'billiard-01'
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
