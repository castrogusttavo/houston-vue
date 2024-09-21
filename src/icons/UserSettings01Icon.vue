
<template>
  <Icon :iconName="'user-settings-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserSettings01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-settings-01'
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
