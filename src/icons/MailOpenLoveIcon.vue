
<template>
  <Icon :iconName="'mail-open-love'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailOpenLoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-open-love'
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
