
<template>
  <Icon :iconName="'edit-user-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EditUser02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'edit-user-02'
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
