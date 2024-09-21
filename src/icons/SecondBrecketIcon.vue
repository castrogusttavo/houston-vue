
<template>
  <Icon :iconName="'2nd-bracket'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecondBrecketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '2nd-bracket'
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
