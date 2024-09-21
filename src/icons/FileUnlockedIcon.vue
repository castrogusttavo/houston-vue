
<template>
  <Icon :iconName="'file-unlocked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileUnlockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-unlocked'
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
