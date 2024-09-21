
<template>
  <Icon :iconName="'mirroring-screen'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MirroringScreenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mirroring-screen'
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
