
<template>
  <Icon :iconName="'move-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoveTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'move-top'
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
