
<template>
  <Icon :iconName="'euro-send'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EuroSendIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'euro-send'
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
