
<template>
  <Icon :iconName="'message-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-add-02'
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
