
<template>
  <Icon :iconName="'pencil-edit-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PencilEdit02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pencil-edit-02'
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
