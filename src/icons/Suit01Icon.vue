
<template>
  <Icon :iconName="'suit-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Suit01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'suit-01'
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
