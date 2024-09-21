
<template>
  <Icon :iconName="'user-remove-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserRemove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-remove-01'
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
