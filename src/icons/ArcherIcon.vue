
<template>
  <Icon :iconName="'archer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArcherIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'archer'
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
