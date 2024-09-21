
<template>
  <Icon :iconName="'call-unlocked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallUnlockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-unlocked'
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
