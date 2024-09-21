
<template>
  <Icon :iconName="'user-edit-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserEdit01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-edit-01'
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
