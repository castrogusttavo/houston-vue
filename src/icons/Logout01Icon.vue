
<template>
  <Icon :iconName="'logout-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Logout01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'logout-01'
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
