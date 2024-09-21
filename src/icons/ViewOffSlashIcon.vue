
<template>
  <Icon :iconName="'view-off-slash'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ViewOffSlashIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'view-off-slash'
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
