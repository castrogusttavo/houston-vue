
<template>
  <Icon :iconName="'more-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-vertical'
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
