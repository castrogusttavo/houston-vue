
<template>
  <Icon :iconName="'file-yen'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileYenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-yen'
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
