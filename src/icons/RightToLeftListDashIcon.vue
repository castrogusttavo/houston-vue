
<template>
  <Icon :iconName="'right-to-left-list-dash'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RightToLeftListDashIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'right-to-left-list-dash'
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
