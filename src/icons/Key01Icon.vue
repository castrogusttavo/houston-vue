
<template>
  <Icon :iconName="'key-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Key01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'key-01'
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
