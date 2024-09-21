
<template>
  <Icon :iconName="'nike'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NikeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'nike'
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
