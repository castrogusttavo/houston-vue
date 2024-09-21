
<template>
  <Icon :iconName="'gold-ingots'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoldIngotsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gold-ingots'
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
