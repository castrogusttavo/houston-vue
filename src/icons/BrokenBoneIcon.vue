
<template>
  <Icon :iconName="'broken-bone'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BrokenBoneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'broken-bone'
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
