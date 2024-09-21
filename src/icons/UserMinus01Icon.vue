
<template>
  <Icon :iconName="'user-minus-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserMinus01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-minus-01'
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
