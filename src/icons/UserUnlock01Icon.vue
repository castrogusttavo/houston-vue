
<template>
  <Icon :iconName="'user-unlock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserUnlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-unlock-01'
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
