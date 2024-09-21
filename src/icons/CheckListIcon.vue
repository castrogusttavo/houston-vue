
<template>
  <Icon :iconName="'check-list'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckListIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'check-list'
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
