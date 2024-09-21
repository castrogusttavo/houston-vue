
<template>
  <Icon :iconName="'lake'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LakeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lake'
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
