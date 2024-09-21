
<template>
  <Icon :iconName="'group-items'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GroupItemsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'group-items'
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
