
<template>
  <Icon :iconName="'edit-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EditOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'edit-off'
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
