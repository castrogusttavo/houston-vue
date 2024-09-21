
<template>
  <Icon :iconName="'projector'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ProjectorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'projector'
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
