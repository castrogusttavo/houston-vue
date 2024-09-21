
<template>
  <Icon :iconName="'sleeveless'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SleevelessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sleeveless'
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
