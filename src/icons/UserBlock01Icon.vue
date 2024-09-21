
<template>
  <Icon :iconName="'user-block-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserBlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-block-01'
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
